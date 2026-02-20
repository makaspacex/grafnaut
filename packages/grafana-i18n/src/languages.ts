import {
  ENGLISH_US,
  FRENCH_FRANCE,
  SPANISH_SPAIN,
  GERMAN_GERMANY,
  CHINESE_SIMPLIFIED,
  BRAZILIAN_PORTUGUESE,
  CHINESE_TRADITIONAL,
  ITALIAN_ITALY,
  JAPANESE_JAPAN,
  INDONESIAN_INDONESIA,
  KOREAN_KOREA,
  RUSSIAN_RUSSIA,
  CZECH_CZECHIA,
  DUTCH_NETHERLANDS,
  HUNGARIAN_HUNGARY,
  PORTUGUESE_PORTUGAL,
  POLISH_POLAND,
  SWEDISH_SWEDEN,
  TURKISH_TURKEY,
} from './constants';

interface TranslationDefinition {
  /** IETF language tag */
  code: string;

  /** The language name in its own language (e.g. "Français" for French) */
  name: string;
}

/**
 * Supported languages for translation.
 */
export const LANGUAGES: TranslationDefinition[] = [
  { code: ENGLISH_US, name: 'English' },
  { code: CHINESE_SIMPLIFIED, name: '中文（简体）' },
];
