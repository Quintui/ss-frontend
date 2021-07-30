import { CustomResponseType } from '../GlobalTypes/responseType';
import { carMakesResponse } from '../Store/ducks/addAdvert/@types';
import $api from './instance';

export const AddAdvertApi = {
  async getAllMakes(): Promise<CustomResponseType<carMakesResponse[]> | undefined> {
    try {
      const newsData = await $api.get<CustomResponseType<carMakesResponse[]>>('/cardb/makes');
      return newsData.data;
    } catch (error) {
      console.log(error);
    }
  },
};
