# Steps to reproduce

1. Run app `ng serve`
2. Open browser at `localhost:4200`
3. Here you'll see a link "heroes" which points to the route protected by AuthGuard
4. When you navigate you should be silently redirected from `heroes` to `login`
5. You can observe URL `localhost:4200/login` although it's specified to use `skipLocationChange` in [AuthGuard.ts](src/app/auth.guard.ts)
