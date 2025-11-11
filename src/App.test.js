import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Plus, Trash2, Play, X, Code, Database } from 'lucide-react';

const RulesEngineApp = () => {
  const [rules, setRules] = useState([]);
  const [facts, setFacts] = useState([
    { key: 'risk_grade', value: 'D' },
    { key: 'business_vintage_by_month', value: '10' },
    { key: 'business_address_ownership_status', value: 'rented' },
    { key: 'address_ownership_status', value: 'owned' },
    { key: 'policy', value: 'DIRECT' },
    { key: 'partner_code', value: '9c7bfcd45af46' },
    { key: 'partner_type', value: 'None' }
  ]);
  const [newRule, setNewRule] = useState({
    name: '',
    conditions: `{
  "all": [
    {
      "fact": "risk_grade",
      "operator": "equal",
      "value": "D"
    }
  ]
}`,
    event: `{
  "type": "rule-triggered",
  "params": {
    "message": "Rule condition met"
  }
}`
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadRules();
  }, []);

  const loadRules = async () => {
    try {
      const result = await window.storage.list('rule:');
      if (result && result.keys) {
        const loadedRules = [];
        for (const key of result.keys) {
          const ruleData = await window.storage.get(key);
          if (ruleData) {
            loadedRules.push(JSON.parse(ruleData.value));
          }
        }
        setRules(loadedRules);
      }
    } catch (err) {
      console.log('No existing rules found');
    }
  };

  const saveRule = async () => {
    try {
      const conditions = JSON.parse(newRule.conditions);
      const event = JSON.parse(newRule.event);
      
      if (!newRule.name.trim()) {
        setError('Rule name is required');
        return;
      }

      const rule = {
        name: newRule.name,
        conditions,
        event
      };

      await window.storage.set(`rule:${newRule.name}`, JSON.stringify(rule));
      
      setRules([...rules, rule]);
      setNewRule({
        name: '',
        conditions: `{
  "all": [
    {
      "fact": "risk_grade",
      "operator": "equal",
      "value": "D"
    }
  ]
}`,
        event: `{
  "type": "rule-triggered",
  "params": {
    "message": "Rule condition met"
  }
}`
      });
      setError('');
    } catch (err) {
      setError('Invalid JSON format: ' + err.message);
    }
  };

  const deleteRule = async (ruleName) => {
    try {
      await window.storage.delete(`rule:${ruleName}`);
      setRules(rules.filter(r => r.name !== ruleName));
    } catch (err) {
      setError('Error deleting rule: ' + err.message);
    }
  };

  const addFact = () => {
    setFacts([...facts, { key: '', value: '' }]);
  };

  const removeFact = (index) => {
    setFacts(facts.filter((_, i) => i !== index));
  };

  const updateFact = (index, field, value) => {
    const updatedFacts = [...facts];
    updatedFacts[index][field] = value;
    setFacts(updatedFacts);
  };

  const convertFactsToObject = () => {
    const factObj = {};
    facts.forEach(fact => {
      if (fact.key.trim()) {
        let value = fact.value;
        
        if (!isNaN(value) && value.trim() !== '') {
          value = parseFloat(value);
        } 
        else if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        
        factObj[fact.key] = value;
      }
    });
    return factObj;
  };

  const evaluateRules = async () => {
    try {
      const fact = convertFactsToObject();
      setError('');

      const { Engine } = await import('https://cdn.skypack.dev/json-rules-engine@6.5.0');
      
      const engine = new Engine([], { allowUndefinedFacts: true });
      
      engine.addOperator('inArray', (factValue, jsonValue) => {
        if (!factValue || !factValue.length) return false;
        return factValue.some(item => jsonValue.includes(item));
      });

      engine.addOperator('notInArray', (factValue, jsonValue) => {
        if (!factValue || !factValue.length) return false;
        return !factValue.some(item => jsonValue.includes(item));
      });

      for (const rule of rules) {
        engine.addRule(rule);
      }

      const successRules = [];
      const failedRules = [];

      engine.on('success', (event, almanac, ruleResult) => {
        successRules.push({
          name: ruleResult.name,
          event: ruleResult.event,
          conditions: ruleResult.conditions
        });
      });

      engine.on('failure', (event, almanac, ruleResult) => {
        failedRules.push({
          name: ruleResult.name,
          conditions: ruleResult.conditions
        });
      });

      await engine.run(fact);

      setResults({
        success: successRules,
        failed: failedRules,
        total: rules.length
      });
    } catch (err) {
      setError('Evaluation error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Code className="text-white" size={32} />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rules Engine
            </h1>
          </div>
          <p className="text-purple-300 text-lg">Create, manage, and evaluate business rules</p>
        </div>

        {error && (
          <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/50 rounded-xl p-4 mb-6 flex items-start gap-3 shadow-xl">
            <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-red-200">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Create Rule Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Plus className="text-purple-400" size={20} />
              </div>
              <h2 className="text-2xl font-semibold text-white">Create New Rule</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Rule Name
                </label>
                <input
                  type="text"
                  value={newRule.name}
                  onChange={(e) => setNewRule({...newRule, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="e.g., high-risk-check"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Conditions (JSON)
                </label>
                <textarea
                  value={newRule.conditions}
                  onChange={(e) => setNewRule({...newRule, conditions: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-slate-500 font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  rows={8}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Event (JSON)
                </label>
                <textarea
                  value={newRule.event}
                  onChange={(e) => setNewRule({...newRule, event: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-slate-500 font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  rows={5}
                />
              </div>

              <button
                onClick={saveRule}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition shadow-lg hover:shadow-purple-500/50"
              >
                <Plus size={20} />
                Save Rule
              </button>
            </div>
          </div>

          {/* Stored Rules Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Database className="text-pink-400" size={20} />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                Stored Rules
              </h2>
              <span className="ml-auto px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium">
                {rules.length}
              </span>
            </div>
            
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-700/50">
              {rules.length === 0 ? (
                <div className="text-center py-12">
                  <Database className="mx-auto mb-4 text-slate-600" size={48} />
                  <p className="text-slate-400">No rules stored yet</p>
                </div>
              ) : (
                rules.map((rule, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition group">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-white text-lg">{rule.name}</h3>
                      <button
                        onClick={() => deleteRule(rule.name)}
                        className="text-red-400 hover:text-red-300 transition opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <pre className="text-xs bg-slate-950/50 p-3 rounded-lg overflow-x-auto text-purple-300 border border-slate-700">
                      {JSON.stringify(rule.conditions, null, 2)}
                    </pre>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Evaluation Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Evaluate Facts</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-lg font-medium text-purple-300">
                  Facts
                </label>
                <button
                  onClick={addFact}
                  className="bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 px-4 py-2 rounded-lg flex items-center gap-2 transition border border-purple-500/30"
                >
                  <Plus size={16} />
                  Add Fact
                </button>
              </div>
              
              <div className="space-y-3 max-h-[400px] overflow-y-auto mb-6 pr-2 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-700/50">
                {facts.map((fact, index) => (
                  <div key={index} className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition group">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={fact.key}
                        onChange={(e) => updateFact(index, 'key', e.target.value)}
                        placeholder="Key"
                        className="flex-1 px-4 py-2 bg-slate-950/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      />
                      <input
                        type="text"
                        value={fact.value}
                        onChange={(e) => updateFact(index, 'value', e.target.value)}
                        placeholder="Value"
                        className="flex-1 px-4 py-2 bg-slate-950/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      />
                      <button
                        onClick={() => removeFact(index)}
                        className="text-red-400 hover:text-red-300 transition opacity-0 group-hover:opacity-100"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={evaluateRules}
                disabled={rules.length === 0}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-slate-700 disabled:to-slate-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition shadow-lg hover:shadow-green-500/50 disabled:shadow-none"
              >
                <Play size={20} />
                Run Evaluation
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
              {results ? (
                <div className="space-y-4">
                  <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/50 rounded-xl p-5 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <CheckCircle className="text-green-400" size={20} />
                      </div>
                      <h4 className="font-semibold text-green-300 text-lg">
                        Successful Rules
                      </h4>
                      <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                        {results.success.length}
                      </span>
                    </div>
                    {results.success.length > 0 ? (
                      <ul className="space-y-2">
                        {results.success.map((rule, idx) => (
                          <li key={idx} className="bg-slate-900/50 p-3 rounded-lg border border-green-500/20">
                            <p className="font-semibold text-white mb-1">{rule.name}</p>
                            <p className="text-green-300 text-xs">{rule.event.type}</p>
                            {rule.event.params && (
                              <p className="text-green-400 text-xs mt-1">{rule.event.params.message}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-green-300 text-sm">No rules matched</p>
                    )}
                  </div>

                  <div className="bg-slate-900/50 border border-slate-600/50 rounded-xl p-5 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-semibold text-slate-300 text-lg">
                        Failed Rules
                      </h4>
                      <span className="ml-auto px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium">
                        {results.failed.length}
                      </span>
                    </div>
                    {results.failed.length > 0 ? (
                      <ul className="space-y-1">
                        {results.failed.map((rule, idx) => (
                          <li key={idx} className="text-sm text-slate-400 bg-slate-950/30 px-3 py-2 rounded-lg">
                            {rule.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-400 text-sm">All rules passed</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-12 text-center">
                  <Play className="mx-auto mb-4 text-slate-600" size={48} />
                  <p className="text-slate-400">Run evaluation to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesEngineApp;