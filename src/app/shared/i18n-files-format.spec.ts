/**
 * This unit tests compare both english and French i18n json files
 * and verify that there is no missing keys and that the order is the same
 */

describe('French and english translation files', () => {
  const deepKeys = require('deep-keys');
  const glob = require('glob');

  const tradFolder = '/src/**/i18n';
  const frFolder = tradFolder + '/fr/*.json';
  const enFolder = tradFolder + '/en/*.json';

  let frFileNames: string[];
  let enFileNames: string[];

  // Load all json files (only once) for all unit tests
  beforeAll((done) => {
    glob(frFolder, null, (frErr: string, frFiles: string[]) => {
      frFileNames = frFiles;

      glob(enFolder, null, (enErr: string, enFiles: string[]) => {
        enFileNames = enFiles;

        done();
      });
    });
  });

  it('should have the same number of files with the same names in both folders.', () => {
    expect(frFileNames).toEqual(enFileNames.map((fileName) => fileName.replace('en/', 'fr/')));
  });

  it('should have the same keys in the same order for every files of the same name.', () => {
    frFileNames.forEach((fileName: string) => {
      const frFile = require(fileName);
      const enFile = require(fileName.replace('fr/', 'en/'));
      expect(deepKeys(frFile)).toEqual(
        deepKeys(enFile),
        'Des différences ont été trouvés entres les fichiers de traduction i18n'
      );
    });
  });
});
