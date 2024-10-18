import { NetworkId } from '@sonarwatch/portfolio-core';
import { PublicKey } from '@solana/web3.js';
import { Cache } from '../../Cache';
import { Job, JobExecutor } from '../../Job';
import { platformId, strategies, strategiesCacheKey } from './constants';
import { strategyStruct } from './structs';
import { getClientSolana } from '../../utils/clients';
import { getParsedAccountInfo } from '../../utils/solana/getParsedAccountInfo';

const executor: JobExecutor = async (cache: Cache) => {
  const connection = getClientSolana();

  const strategys = await Promise.all(
    strategies.map((strategy) =>
      getParsedAccountInfo(
        connection,
        strategyStruct,
        PublicKey.findProgramAddressSync(
          [Buffer.from('STRATEGY')],
          new PublicKey(strategy)
        )[0]
      )
    )
  );

  await cache.setItem(strategiesCacheKey, strategys, {
    prefix: platformId,
    networkId: NetworkId.solana,
  });
};

const job: Job = {
  id: `${platformId}-strategy`,
  executor,
  label: 'normal',
};
export default job;