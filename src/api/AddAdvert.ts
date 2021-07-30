import { CustomResponseType } from '../GlobalTypes/responseType';
import {
  carGenReq,
  carMakesResponse,
  carModelReq,
  carModelResponse,
  carGenerationResponse,
  carSerieResponse,
} from '../Store/ducks/addAdvert/@types';
import $api from './instance';

export const AddAdvertApi = {
  async getAllMakes(): Promise<CustomResponseType<carMakesResponse[]> | undefined> {
    try {
      const make = await $api.get<CustomResponseType<carMakesResponse[]>>('/cardb/makes');
      return make.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getModelByYear(
    modelData: carModelReq,
  ): Promise<CustomResponseType<carModelResponse[]> | undefined> {
    try {
      const model = await $api.post<CustomResponseType<carModelResponse[]>>(
        '/cardb/modelByYear',
        modelData,
      );
      return model.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getGenByYear(
    genData: carGenReq,
  ): Promise<CustomResponseType<carGenerationResponse[]> | undefined> {
    try {
      const gen = await $api.post<CustomResponseType<carGenerationResponse[]>>(
        '/cardb/genByYear',
        genData,
      );
      return gen.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getSerieByGenId(
    genId: number,
  ): Promise<CustomResponseType<carSerieResponse[]> | undefined> {
    try {
      const serie = await $api.post<CustomResponseType<carSerieResponse[]>>(
        `/cardb/serieByGenId/${genId}`,
      );
      return serie.data;
    } catch (error) {
      console.log(error);
    }
  },
};
