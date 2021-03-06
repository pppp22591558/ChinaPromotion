export default function languageCheck(req, res, next) {
  let version = 'us';
  if (req.params[0] === '/') {
    const language = useDefaultLanguage(req);
    version = matchToVersion(language);
  } else {
    const versionRequire = req.params[0].split('/')[1];
    version = matchToVersion(versionRequire);
  }
  if (req.params[0] !== `/${version}`) {
    req.version = version;
    res.redirect(`/${version}`);
  } else {
    req.version = version;
    next();
  }
}

export function useDefaultLanguage({ headers, cookies }) {
  const preferLanguage = cookies['prefer-language'];
  let language = null;
  if (preferLanguage) {
    language = preferLanguage;
  } else {
    const acceptLanguageHeader = headers['accept-language'].toLowerCase();
    language = acceptLanguageHeader ? acceptLanguageHeader.split(',')[0] : 'en-US';
  }
  return language;
}

export function matchToVersion(language) {
  let version = 'us';
  if (language.match(/tw/g)) {
    version = 'tw';
  } else if (language.match(/cn/g)) {
    version = 'cn';
  }
  return version;
}
