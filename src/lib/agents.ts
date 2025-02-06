import { supabase } from './supabase';

export const getAgentInfo = async (id: string) => {
  const { data, error } = await supabase
    .from('ai_agents')
    .select('*')
    .eq('id', id)
    .single();
  if (error) {
    console.error('Error fetching agent info', error);
    throw error;
  }
  // console.log('Agent info', data);
  return data;
};
