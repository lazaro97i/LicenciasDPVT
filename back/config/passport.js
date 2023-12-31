import { User } from '../models/users_model.js'
import passport from 'passport'
import passportJwt from 'passport-jwt'

const { KEY_JWT } = process.env

passport.use(
  new passportJwt.Strategy(
    {
      jwtFromRequest:
        passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: KEY_JWT
    },
    async (jwt_payload, done) => {
      try {
        let user = await User.findOne({ _id: jwt_payload.id })
        if (user) {
          user = {
            id: user._id,
            fileNumber: user.fileNumber,
            photo: user.photo,
            role: user.role,
            status: user.status
          }
          return done(null, user)
        } else {
          return done(null, false)
        }
      } catch (e) {
        console.log(e)
        return done(e, false)
      }
    }
  )
)

export default passport