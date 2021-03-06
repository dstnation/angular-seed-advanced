// app
import { ILang } from '../../core/index';

export class AppConfig {

  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'en', title: 'English' },
    { code: 'es', title: 'Spanish' },
    { code: 'fr', title: 'French' },
    { code: 'ru', title: 'Russian' },
    { code: 'bg', title: 'Bulgarian' },
    { code: 'kr', title: 'Korean' }
  ];

}
