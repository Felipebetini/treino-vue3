export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get('/user/me')
    return {
      data: response.data
    }
  }
})
