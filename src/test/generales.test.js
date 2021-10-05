describe('Probando JEST',()=>{
    test('Prueba de objetos iguales', ()=>{
      const datos1 = {
        nombre: 'Emmanuel',
        edad: 28
      };
      const datos2 = {
        nombre: 'Emmanuel',
        edad: 28
      };
      expect(datos1).toEqual(datos2);
    })
  })