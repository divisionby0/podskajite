export class SectionsMetadata{

  public static baseDescription:string = "Экскурсионные места, достопримечательности, памятники, храмы, объекты инфраструктуры, рестораны, магазины, бары. Поиск по карте. Фильтрация по стоимости, расстоянию от вас, способу добраться до объекта";

  public static getHome():any{
    return {
      meta:{
        title:"Подскажите! Сервис поиска мест интереса | Главная",
        description:SectionsMetadata.baseDescription
      }
    };
  }

  public static getAbout():any{
    return {
      meta:{
        title:"Подскажите! Сервис поиска мест интереса | О нас",
        description:SectionsMetadata.baseDescription
      }
    };
  }

  public static getCreatePlace():any{
    return {
      meta:{
        title:"Подскажите! Сервис поиска мест интереса | Создание нового места",
        description:SectionsMetadata.baseDescription
      }
    };
  }

  public static getSelectedPlace():any{
    return {
      meta:{
        title:"#placeName | Подскажите! Сервис поиска мест интереса",
        description:SectionsMetadata.baseDescription
      }
    };
  }

}
