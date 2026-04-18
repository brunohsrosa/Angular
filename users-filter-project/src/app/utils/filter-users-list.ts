import { isWithinInterval } from "date-fns/isWithinInterval";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList; /* Se o nome não for digitado, retorna a lista completa de usuários */
  }

  const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase())); /* Filtra a lista de usuários pelo nome, ignorando maiúsculas e minúsculas */

  return filteredList; /* Retorna a lista de usuários filtrados pelo nome */
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList; /* Se o status não for selecionado, retorna a lista completa de usuários */
  }

  const filteredList = usersList.filter((user) => user.ativo === status); /* Filtra a lista de usuários pelo status */

  return filteredList; /* Retorna a lista de usuários filtrados pelo status */
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATES_NOT_SELECTED) {
    return usersList; /* Se as datas não forem selecionadas, retorna a lista completa de usuários */
  }

  const filteredList = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
    start: startDate,
    end: endDate
  })); /* Filtra a lista de usuários pela data usando a função isWithinInterval da biblioteca date-fns */

  return filteredList; /* Retorna a lista de usuários filtrados pela data */
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => { /* Método para filtrar a lista de usuários com base nas opções de filtro */
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList); /* Filtra a lista de usuários pelo nome usando as opções de filtro */
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList); /* Filtra a lista de usuários pelo status usando as opções de filtro */
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList); /* Filtra a lista de usuários pela data usando as opções de filtro */

  return filteredList;
}

export { filterUsersList };
