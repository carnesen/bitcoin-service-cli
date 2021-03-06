import { leaf } from '@carnesen/cli';
import { startService } from '@carnesen/bitcoin-service';
import { DEFAULT_CONFIG_FILE_PATH } from '@carnesen/bitcoin-config';
import { configFilePath, bitcoinHome } from './options';

export const start = leaf({
  commandName: 'start',
  options: { configFilePath, bitcoinHome },
  async action({ bitcoinHome, configFilePath }) {
    const { changed } = await startService(
      configFilePath || DEFAULT_CONFIG_FILE_PATH,
      bitcoinHome || undefined,
    );
    // ^^ bitcoind prints "Bitcoin server starting" to console
    return changed ? undefined : 'Bitcoin server is running';
  },
});
