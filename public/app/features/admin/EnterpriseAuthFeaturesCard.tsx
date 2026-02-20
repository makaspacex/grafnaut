import { GrafanaEdition } from '@grafana/data/internal';
import { config } from '@grafana/runtime';

export function isOpenSourceBuildOrUnlicenced() {
  if (config.buildInfo.edition === GrafanaEdition.OpenSource) {
    return true;
  }

  if (config.licenseInfo.stateInfo !== 'Licensed') {
    return true;
  }

  return false;
}
