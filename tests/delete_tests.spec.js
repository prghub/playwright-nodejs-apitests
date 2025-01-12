import {test, expect} from '@playwright/test';
test('API Delete Request', async({request}) =>{

    const response = await request.delete("https://reqres.in/api/users/2", {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
  })
  
    expect(response.status()).toBe(204);
})