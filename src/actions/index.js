

// Unique action creator bc of branching logic
export function signinUser({email, password}) {
  // Rtn a fn gives that gives us direct access to dispatch
  return function(dispatch) {
  // Submit email/pw to serer
    
  // If req good:
    // - Update state to indicate authenticated
    // - Save JWT Token
    // - Redirect to route '/feature'
  // Else show error to user
  }
}