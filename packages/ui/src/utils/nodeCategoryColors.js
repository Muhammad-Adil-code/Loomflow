// Loomflow: accent colors used for node headers on the flow canvas, keyed by node category.
const CATEGORY_COLORS = {
    'Chat Models': '#F4511E',
    'Chat Models Loop': '#F4511E',
    LLMs: '#E64A19',
    Agents: '#14213D',
    'Multi Agents': '#2B3F73',
    'Sequential Agents': '#2B3F73',
    Chains: '#8E24AA',
    Engine: '#6A1B9A',
    Memory: '#00897B',
    'Vector Stores': '#00796B',
    Embeddings: '#0097A7',
    Retrievers: '#0288D1',
    'Document Loaders': '#F9A825',
    'Text Splitters': '#EF6C00',
    Tools: '#5D4037',
    'Tools (MCP)': '#5D4037',
    Prompts: '#C2185B',
    'Output Parsers': '#AD1457',
    Cache: '#546E7A',
    Moderation: '#C62828',
    Utilities: '#455A64',
    'Record Manager': '#6D4C41',
    'Response Synthesizer': '#7B1FA2',
    Analytic: '#3949AB',
    Graph: '#2E7D32',
    'Speech To Text': '#1565C0'
}

const FALLBACK = '#F4511E'

export const getCategoryColor = (category) => (category && CATEGORY_COLORS[category]) || FALLBACK
