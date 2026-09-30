/* 


let users = [
  { id: 1, name: 'Анна' },
  { id: 2, name: 'Борис' },
  { id: 3, name: 'Вика' }
];

export const getUserAll = (req: any, res: any) => {
  res.json(users);
}

export const getUserId = (req: any, res: any) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id))
    return res.status(400).json({ error: 'id — число' });
  
  const u = users.find(x => x.id === id);
  if (!u) return res.status(404).json({ error: 'Не найден' });
  
  res.json(u);
}


export const addUser = (req: any, res: any) => {
  const { name } = req.body;
  
  
  // Генерируем новый id (максимальный существующий + 1)
  const newId = users.length > 0 
    ? Math.max(...users.map(u => u.id)) + 1 
    : 1;
  
  const newUser = { id: newId, name };
  users.push(newUser);
  
  res.status(201).json(newUser);
}

export const changeUser = (req: any, res: any) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id))
    return res.status(400).json({ error: 'id — число' });
  
  const index = users.findIndex(x => x.id === id);
  if (index === -1)
    return res.status(404).json({ error: 'Не найден' });
  
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'name обязателен и должен быть строкой' });
  }
  
  // Полная замена: id сохраняем, остальное перезаписываем
  users[index] = { id, name };
  
  res.json(users[index]);
}

export const  patchUser = (req: any, res: any) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id))
    return res.status(400).json({ error: 'id — число' });
  
  const user = users.find(x => x.id === id);
  if (!user)
    return res.status(404).json({ error: 'Не найден' });
  
  // Частичное обновление: обновляем только переданные поля
  const { name } = req.body;
  if (name !== undefined) {
    if (typeof name !== 'string') {
      return res.status(400).json({ error: 'name должен быть строкой' });
    }
    user.name = name;
  }
  
  res.json(user);
}

export const deleteUser = (req: any, res: any) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id))
    return res.status(400).json({ error: 'id — число' });
  
  const index = users.findIndex(x => x.id === id);
  if (index === -1)
    return res.status(404).json({ error: 'Не найден' });
  
  users.splice(index, 1);
  
  res.status(204).send();
} */