const postRecipe = async (recipe, getAccessTokenSilently) => {
  const options = {
    audience: 'https://home-cooking/api',
    scope: 'read:recipes',
  };
  const accessToken = await getAccessTokenSilently(options);
  const request = {
    method: 'post',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  // const res = await fetch('http://localhost:5000/recipes', request);
  const res = await fetch(
    'https://homecooking.azurewebsites.net/recipes',
    request
  );
  return res;
};

export default postRecipe;
