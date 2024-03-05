// GET user profil

export async function getUserProfil(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers,
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.body;
  } catch (error) {
    console.error("Error:", error);
    return "Error";
  }
}

// LOGIN

export async function postFormData(email, password) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const data = await response.json();
      const token = data.body.token;
      localStorage.setItem("token", token);
      return "Token received with success";
    } else {
      console.log("Error:", response.statusText);
      return "Error";
    }
  } catch (error) {
    console.log("Error :", error.message);
    return "Error";
  }
}

// CREATE USER

export async function postUser(email, password, firstName, lastName, userName) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName, userName }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("res post signup :", data);
      return true;
    } else {
      const errorData = await response.text();
      console.log("Error:", errorData);
      return false;
    }
  } catch (error) {
    console.log("Error : ", error.message);
    return false;
  }
}

// UPDATE USERNAME

export async function updateUserName(firstName, lastName) {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log(config);
  const bodyParameters = {
    firstName: firstName,
    lastName: lastName,
  };
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyParameters),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
