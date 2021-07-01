export default function dataExtraction(obj) {
  const { special } = obj;

  return special.reduce((newArray, item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;

    newArray.push({
      id,
      name,
      icon,
      description,
    });

    return newArray;
  }, []);
}
