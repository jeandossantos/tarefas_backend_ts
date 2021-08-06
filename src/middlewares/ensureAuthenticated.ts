/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import passport from 'passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { FindUserService } from '../services/FindUserService';

const findUserService = new FindUserService();

const opts: StrategyOptions = {
  secretOrKey: process.env.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const strategy = new Strategy(opts, async (payload, done) => {
  try {
    const user = await findUserService.execute(payload.id);

    if (user) {
      return done(null, user ? { ...payload } : false);
    }
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(strategy);

export { passport };

// function ensureAuthenticated(): unknown {
//   return () => passport.authenticate('jwt', { session: false });
// }
export const ensureAuthenticated = () =>
  passport.authenticate('jwt', { session: false });
