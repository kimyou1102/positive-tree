import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const createCampaign = async (campaignId: number, token: string) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/campaign/application/${campaignId}`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
