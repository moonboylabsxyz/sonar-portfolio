import { Platform } from '@sonarwatch/portfolio-core';
import { PublicKey } from '@solana/web3.js';

export const platformId = 'adrastea';
export const platform: Platform = {
  id: platformId,
  name: 'Adrastea',
  image: 'https://sonar.watch/img/platforms/adrastea.webp',
  website: 'https://app.adrastea.fi/',
  twitter: 'https://x.com/AdrasteaFinance',
  defiLlamaId: 'adrastea', // from https://defillama.com/docs/api
};

export const usdcLedgerPk = new PublicKey(
  '7uxLeq1RikyRjSGArSD76Yq1cpx1GdfQf16nNprRZJA4'
);
export const jlpLedgerPk = new PublicKey(
  'AGUu8jtcox9Lf8hkufe6w747cXRkkoqoW1XAPYPeJbLz'
);

export const jlpPositionsCacheKey = 'jlp_positions';
export const usdcPositionsCacheKey = 'usdc_positions';

export const jlpToken = new PublicKey(
  '27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4'
);