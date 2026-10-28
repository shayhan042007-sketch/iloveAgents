export interface AgentRegistrationPayload {
  id: string;
  name: string;
  version: string;
  capabilities: string[];
}

export function validateAgentRegistration(payload: any): boolean {
  if (!payload || typeof payload !== 'object') return false;
  
  const { id, name, version, capabilities } = payload;
  
  if (typeof id !== 'string' || id.trim() === '') return false;
  if (typeof name !== 'string' || name.trim() === '') return false;
  if (typeof version !== 'string' || version.trim() === '') return false;
  
  if (!Array.isArray(capabilities) || capabilities.length === 0) return false;
  return capabilities.every(cap => typeof cap === 'string' && cap.trim() !== '');
}
