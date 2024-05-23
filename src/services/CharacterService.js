import CharacterApi from '@/api/CharacterApi';
export class CharacterService {
  cunstructor() {
    this.characterApi = CharacterApi;
  }
  async getCharacters() {
    const result = await CharacterApi.getCharacters();
    // const result = await responseCharactersWrapper(response);
    // const result = await responseCharactersWrapper(CharacterApi.getCharacters);
    return result;
  }

  async getCharactersByFilter(data) {
    const result = await CharacterApi.getCharactersByFilter(data);
    // const result = await responseCharactersWrapper(response);
    console.log(result);
    return result;
  }

  async getPageByNumber(pageNumber, href) {
    const url = new URL(href);
    url.searchParams.set('page', pageNumber);
    const result = await CharacterApi.getPageByUrl(href);
    // const result = await responseCharactersWrapper(response);

    return result;
  }
}

export default new CharacterService();
