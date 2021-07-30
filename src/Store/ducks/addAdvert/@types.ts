export type carMakesResponse = {
  alphabet: string;
  make: {
    name: string;
    id_car_make: number;
  }[];
};

export type carModelReq = {
  id_car_make: number;
  year: string;
};

export type carModelResponse = {
  name: string;
  id_car_make: number;
  id_car_model: number;
};
export type carGenerationResponse = {
  year_begin: string;
  year_end: string;
  name: string;
  id_car_model: number;
  id_car_generation: number;
};
export type carGenReq = {
  year: string;
  id_car_model: number;
};
export type carSerieResponse = {
  name: string;
  id_car_serie: number;
  id_car_model: number;
  id_car_generation: number;
};
export type carTrimResponse = {
  id_car_trim: number;
  car_specification_value: {
    value: string;
  }[];
  car_equipment: {
    name: string;
    year: number;
  }[];
};
