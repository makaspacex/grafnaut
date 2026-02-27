import { ENGLISH_US, CHINESE_SIMPLIFIED } from './constants';

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
