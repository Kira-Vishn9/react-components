import axios from 'axios';
import { Info } from '../../interface/interface';

export default class PostService {
  static async getAll(): Promise<Info<[]>> {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data;
  }
  static async getById(id: number) {
    const response = await axios.get('https://rickandmortyapi.com/api/character/' + id);
    return response;
  }
  static async getByAtrributs(arg: string) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=` + arg);
    return response;
  }
}
