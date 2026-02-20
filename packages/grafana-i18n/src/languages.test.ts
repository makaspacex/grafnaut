import { LANGUAGES } from './languages';

const expectedLanguages = [
  { code: 'en-US', name: 'English' },
  { code: 'zh-Hans', name: '中文（简体）' },
];

describe('LANGUAGES', () => {
  it('should contain all supported languages with correct codes and names', () => {
    expect(LANGUAGES).toEqual(expectedLanguages);
  });

  it('should match a canonical locale definition', () => {
    for (const lang of LANGUAGES) {
      const resolved = Intl.getCanonicalLocales(lang.code);
      expect(lang.code).toEqual(resolved[0]);
    }
  });

  it('should have locale codes including the country code', () => {
    for (const lang of LANGUAGES) {
      if (lang.code === 'pseudo') {
        // special case pseudo because its not a real language
        continue;
      }
      expect(lang.code).toMatch(/^[a-z]{2}-[a-zA-Z]+$/);
    }
  });

  it('should not have duplicate languages codes', () => {
    for (let i = 0; i < LANGUAGES.length; i++) {
      const lang = LANGUAGES[i];
      const index = LANGUAGES.findIndex((v) => v.code === lang.code);
      expect(index).toBe(i);
    }
  });
});
