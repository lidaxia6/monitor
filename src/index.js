import collect from './collect';
import { uploadInterval } from './upload';
import { userSetApiUrl } from './genApiUrl';
import { userSetExposure } from './exposure';

window.LMonitor = {
  collect,
  uploadInterval,
  userSetApiUrl,
  userSetExposure,
};
