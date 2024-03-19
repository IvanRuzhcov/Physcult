export interface TrainingDatum  {
  id:number
  distance: number | string;
  pace: number;
  time: string;
  calories: number | string;
  gpx:string
}

export interface UserPostTrainingData extends TrainingDatum {
  trainer_data_id: number;
  user_post_id: number;
  TrainingDatum: TrainingDatum;  // ??
}

export interface Posts extends UserPostTrainingData {
  id:number
  user_id_post: number;
  photo_post: string[];
  description: string;
  UserPostTrainingData: UserPostTrainingData[];
  createdAt:string
}
