const { soma, subtrai, multiplica, divide, ehPar, raiz, media } = require('./calculadora');

describe("soma", () => {
  test("deve retornar a soma de dois numeros positivos", () => {
    expect(soma(2, 3)).toBe(5);
  });
});

describe("subtrai", () => {
  test("Deve retornar o resultado correto da subtracao", () => {
    expect(subtrai(5, 2)).toBe(3);
  });

  test("Deve retornar um numero negativo quando o resultado for negativo", () => {
    expect(subtrai(2, 5)).toBe(-3);
  });
});

describe("multiplica", () => {
  test("Deve retornar o produto correto de dois numeros", () => {
    expect(multiplica(3, 4)).toBe(12);
  });

  test("Deve retornar 0 quando um dos fatores for 0", () => {
    expect(multiplica(5, 0)).toBe(0);
    expect(multiplica(0, 5)).toBe(0);
  });

  test("O resultado deve ser maior do que cada um dos fatores individualmente (quando ambos forem maiores que 1)", () => {
    const num1 = 3;
    const num2 = 4;
    const resultado = multiplica(num1, num2);
    expect(resultado).toBeGreaterThan(num1);
    expect(resultado).toBeGreaterThan(num2);
  });
});

describe("divide", () => {
  test("Deve retornar o resultado correto da divisao", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("Deve lancar o erro 'Nao e possivel dividir por zero' quando b for 0", () => {
    expect(() => divide(10, 0)).toThrow('Nao e possivel dividir por zero');
  });
});

describe("ehPar", () => {
  test("Deve retornar um valor verdadeiro para numero par", () => {
    expect(ehPar(4)).toBe(true);
  });

  test("Deve retornar um valor falso para numero impar", () => {
    expect(ehPar(5)).toBe(false);
  });
});

describe("raiz", () => {
  test("deve retornar a raiz de um numero positivo", () => {
    expect(raiz(4)).toBeCloseTo(2);
  });

  test("deve retornar a raiz de zero", () => {
    expect(raiz(0)).toBeCloseTo(0);
  });

  test("deve retornar um erro se o numero for negativo", () => {
    expect(() => raiz(-4)).toThrow("Nao e possivel calcular raiz de numero negativo");
  });
});

describe("media", () => {
  test("Deve calcular corretamente a media de uma lista de inteiros", () => {
    expect(media([2, 4, 6, 8])).toBe(5);
  });

  test("Deve calcular corretamente a media quando o resultado for decimal", () => {
    expect(media([1, 2])).toBe(1.5);
  });

  test("Deve lancar erro quando a lista estiver vazia", () => {
    expect(() => media([])).toThrow();
  });

  test("Deve lancar erro quando o argumento nao for um array", () => {
    expect(() => media(123)).toThrow();
  });
});