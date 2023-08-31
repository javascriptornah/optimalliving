import { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Select from "./Select";
import AddSocial from "@/app/inputs/AddSocial";
import { createUser } from "@/lib/SupabaseFunctions";

const Cont = styled.div`
  padding: 32px 0px;

  .holder {
    background-color: ${(props) => props.colors.lightGrey};
    padding: 32px;
    border-radius: 32px 0 0 32px;
  }
  .dropdown {
    background-color: #fff;
  }

  .social {
    background-color: #fff;
    padding: 8px;
  }
  @media only screen and (max-width: 700px) {
    .holder {
      border-radius: 0px;
      margin: 0;
    }
  }
`;

const Signup = () => {
  const [name, setName] = useState("");

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [baseStates, setBaseStates] = useState([]);
  const [baseCities, setBaseCities] = useState([]);
  const [data, setData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [options, setOptions] = useState([]);
  const [regions, setRegions] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    let errors = {};
    for (let key in formData) {
      if ((formData[key].value = "")) {
        errors[key] = "Please select one option";
      }
    }

    if (Object.keys(errors).length === 0) {
      console.log(
        formData.country.value,
        formData.state.value,
        formData.city.value
      );
      console.log("submit form...");
    } else {
      setFormData((prev) => {
        let data = {};
        for (let key in errors) {
          data[key] = {
            ...prev[key],
            error: errors[key],
          };
        }
        return {
          ...prev,
          ...data,
        };
      });
    }
  };

  const changeHandler = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        error: value !== "" ? "" : prev[name].error,
      },
    }));
    if (name === "country") {
      updateCountry(value);
    } else if (name === "state") {
      updateState(value);
    } else if (name === "city") {
      updateCity(value);
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => {
        setData((prevData) => {
          return res.data;
        });
        setRegions((prevData) => {
          return [...new Set(res.data.map((item) => item.country))].sort();
        });
        setOptions((prevData) => {
          return [...new Set(res.data.map((item) => item.country))].sort();
        });
      })
      .catch((err) => console.log(err));

    /*  setLocations((prevLocations) => {
      let newLocations = props.foodLocations.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }); */
  }, []);

  /*  useEffect(() => {
    setLocations((prevLocations) => {
      return props.foodLocations.filter((location) => {
        return location.country.title === country;
      });
    });
  }, [country]); */

  /* useEffect(() => {
    setLocations((prevLocations) => {
      return props.foodLocations.filter((location) => {
        return location.state.title === state;
      });
    });
  }, [state]);

  useEffect(() => {
    setLocations((prevLocations) => {
      return props.foodLocations.filter((location) => {
        return location.city.title === city;
      });
    });
  }, [city]); */

  function updateCountry(value) {
    console.log(value);
    setCountry((prevCountry) => {
      return value;
    });
    let states = data.filter((item) => {
      return item.country === value;
    });
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setStates((prevStates) => {
      return states;
    });
    setBaseStates(states);
    setState("");
    setCity("");
  }

  useEffect(() => {
    console.log(states);
  }, [states]);

  function updateState(value) {
    setState((prevState) => {
      return value;
    });
    let cities = data.filter((city) => city.subcountry === value);
    cities = cities.map((city) => city.name);
    cities.sort();
    setCities(cities);
    setBaseCities(cities);
  }

  function updateCity(value) {
    setCity((prevCity) => {
      return value;
    });
  }

  function updateRegion(location, name) {
    if (name === "country") {
      updateCountry(location);
    } else if (name === "state") {
      updateState(location);
    } else if (name == "city") {
      updateCity(location);
    }
  }

  const [social, setSocial] = useState("");
  const [socialMedia, setSocialMedia] = useState("");

  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    // check if any input fields are empty and cancel form
    let errorField;
    if (
      [
        { name: "country", value: country },
        { name: "state", value: state },
        { name: "name", value: name },
        { name: "social", value: social },
      ].some((field) => {
        errorField = field;
        return field.value == "";
      })
    ) {
      toast.error(`${errorField.name} is empty!`);

      return;
    }
    setLoading(true);
    const res = await createUser(
      name,
      socialMedia,
      social,
      country,
      state,
      city
    );
    setLoading(false);
    if (res) {
      toast.success("User created! Awaiting approval!");
    } else {
      toast.error("Error creating user :(");
    }
  };

  return (
    <Cont colors={COLORS}>
      {loading && (
        <div className="loading-screen">
          <div className="loading-items">
            <div class="lds-ring-green">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="bold green">Creating user...</p>
          </div>
        </div>
      )}
      <div className="holder">
        <Toaster />
        <div>
          <div className="input-line">
            <label htmlFor="">
              <h5 className="mar-bottom-8">Name</h5>
              <input
                placeholder="John doe"
                className="input-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <div className="mar-bottom-8"></div>
            </label>
          </div>
        </div>
        <AddSocial updateValue={setSocial} updateSocialMedia={setSocialMedia} />
        <div className="mar-bottom-16"></div>
        <div className="flex align-center social">
          <h5 className="mar-right-8">{socialMedia}</h5>

          <p>{social}</p>
        </div>

        <div className="mar-bottom-16"></div>
        <Select
          title={"Enter Country"}
          regions={regions}
          value={country}
          updateValue={updateRegion}
          searchPlaceholder="Search"
          options={options}
          setOptions={setOptions}
          name="country"
        />

        <Select
          title={"Enter State"}
          regions={baseStates}
          options={states}
          setOptions={setStates}
          value={state}
          updateValue={updateRegion}
          name="state"
        />

        <Select
          title={"Enter City"}
          regions={baseCities}
          options={cities}
          setOptions={setCities}
          value={city}
          updateValue={updateRegion}
          name="city"
        />
        <div className="green-btn" onClick={submitForm}>
          <h4>Submit</h4>
        </div>
      </div>
    </Cont>
  );
};

export default Signup;
