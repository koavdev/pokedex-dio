import state from './state';

export default {
    // Atualiza o offset da pokedex
    updateOffset() {
        state.offset += state.limit;
    },

    // Adiciona os pokemons a pokedex para o Infinite Loading
    setList(list) {
        state.list.push(...list);
        state.tmpList.push(...list);
    },

    // Informa se a pokedex precisa de mais dados
    setListHasNext(flag) {
        state.listHasNext = flag;
    },

    // Informa se a pokedex finalizou o fetch data
    setListHasCompleted(flag) {
        state.listHasCompleted = flag;
    },

    // Informa se a pokedex deu algum erro
    setListHasError(flag) {
        state.listHasError = flag;
    },

    // Reseta a pokedex para o último cache e remove as informações da pesquisa
    resetList() {
        state.list = [...state.tmpList];
        state.isPokemonSearch = false;
        state.listHasError = false;
        state.searchHasError = false;
    },

    // Adiciona a pokedex apenas o pokemon pesquisado
    setPokemonSearched(pokemon) {
        state.list = [pokemon];
    },

    // Informa se a pesquisa está acontecendo
    setIsSearching(flag) {
        state.isSearching = flag;
    },

    // Informa se a pesquisa foi concluída
    setIsPokemonSearch(flag) {
        state.isPokemonSearch = flag;
    },

    // Informa se a pesquisa deu um erro
    setSearchHasError(flag) {
        state.searchHasError = flag;
    },
    
}
