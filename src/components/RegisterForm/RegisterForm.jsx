import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import classes from "./RegisterForm.module.css";
import { registerOptions } from "../../utils/registerOptions";
import { Success } from "../Success/Success";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    submit,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const [selectedOption, setSelectedOption] = useState("Direct Bank Transfer");

  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common);
       const regionNames = [...new Set(data.map((region) => region.region))];
        const sortedCountries = countryNames.sort((a, b) => {
          const nameA = a.toUpperCase();
          const nameB = b.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        console.log(sortedCountries, regionNames);
        setCountries(sortedCountries);
        setRegions(regionNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function onSubmit(data) {
    const formData = {
      firstName: data.firstName,
      secondName: data.secondName,
      company: data.company,
      email: data.email,
      country: data.country?.value,
      streetAddress: data.streetAddress,
      city: data.city,
      province: data.province?.value,
      zip: data.zip,
      phone: data.phone,
      additionalInfo: data.additionalInfo,
      paymentOption: selectedOption,
    };
    console.log(formData);
    setSuccess(true);
  }

  return (
    <div className={classes.main}>
      {success ? (
        <Success />
      ) : (
        <>
          <form
            id="registerForm"
            className={classes.form__container}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className={classes.header}> Billing details</h1>
            <div className={classes.name__container}>
              <div className={classes.second_name}>
                <label htmlFor="firstName">First Name</label>
                <input
                  className={classes.form_input}
                  type="text"
                  {...register("firstName", registerOptions.firstName)}
                />
                <p className={classes.formError}>
                  {errors?.firstName && errors.firstName.message}
                </p>
              </div>
              <div className={classes.second_name}>
                <label htmlFor="secondName">Second Name</label>
                <input
                  className={classes.form_input}
                  type="text"
                  {...register("secondName", registerOptions.secondName)}
                />
                <p className={classes.formError}>
                  {errors?.secondName && errors.secondName.message}
                </p>
              </div>
            </div>
            <label htmlFor="company">Company Name (Optional)</label>
            <input
              className={classes.form_input}
              type="text"
              {...register("company", registerOptions.company)}
            />
            <p className={classes.formError}>
              {errors?.company && errors.company.message}
            </p>
            <label htmlFor="country"> Country / Region</label>
            <Select
              className={classes.select_input}
              placeholder="Sri Lanka"
              {...register("country", registerOptions.country)}
              options={countries.map((country) => ({
                value: country,
                label: country,
              }))}
              onChange={(selectedOption) => setValue("country", selectedOption)}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  padding: "10px",
                  border: "1px solid #c8c5c5",
                  borderRadius: "15px",
                }),
              }}
            />
            <p className={classes.formError}>
              {errors?.country && errors.country.message}
            </p>
            <label htmlFor="streetAddress">Street address</label>
            <input
              className={classes.form_input}
              type="text"
              {...register("streetAddress", registerOptions.streetAddress)}
            />
            <p className={classes.formError}>
              {errors?.streetAddress && errors.streetAddress.message}
            </p>
            <label htmlFor="city">Town / City</label>
            <input
              className={classes.form_input}
              type="text"
              {...register("city", registerOptions.city)}
            />
            <p className={classes.formError}>
              {errors?.city && errors.city.message}
            </p>
            <label htmlFor="region">Region</label>
            <Select
              className={classes.select_input}
              placeholder="Asia"
              {...register("region", registerOptions.region)}
              options={regions.map((region) => ({
                label: region,
                value: region,
              }))}
              onChange={(selectedOption) => setValue("region", selectedOption)}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  padding: "10px",
                  border: "1px solid #c8c5c5",
                  borderRadius: "15px",
                }),
              }}
            />
            <label htmlFor="zip"> ZIP code</label>
            <input
              className={classes.form_input}
              type="text"
              {...register("zip", registerOptions.zip)}
            />
            <p className={classes.formError}>
              {errors?.zip && errors.zip.message}
            </p>
            <label htmlFor="phone">Phone</label>
            <input
              className={classes.form_input}
              type="tel"
              {...register("phone", registerOptions.phone)}
            />
            <p className={classes.formError}>
              {errors?.phone && errors.phone.message}
            </p>
            <label htmlFor="email">Email address</label>
            <input
              className={classes.form_input}
              type="email"
              {...register("email", registerOptions.email)}
            />
            <p className={classes.formError}>
              {errors?.email && errors.email.message}
            </p>
            <input
              className={classes.form_input}
              type="text"
              placeholder="Additional information"
              {...register("additionalInfo", registerOptions.additionalInfo)}
            />
          </form>
          <div className={classes.paymentSection}>
            <div className={classes.productContainer}>
              <div className={classes.productColumn}>
                <h2>Product</h2>
                <p>
                  {" "}
                  <span className={classes.paleText}>Asgaard sofa </span>X 1
                </p>
                <p>Subtotal</p>
                <p>Total</p>
              </div>
              <div className={classes.priceColumn}>
                <h2>Subtotal</h2>
                <p>Rs. 250,000.00</p>
                <p>Rs. 250,000.00</p>
                <h2 className={classes.goldText}>Rs. 250,000.00</h2>
              </div>
            </div>
            <div className={classes.paymentInfo}>
              <p className={classes.chosenOption}>{selectedOption}</p>

              <p className={classes.transferParPale}>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>

              <div className={classes.inputs}>
                <label
                  onClick={() => setSelectedOption("Direct Bank Transfer")}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Direct Bank Transfer"
                    checked={selectedOption === "Direct Bank Transfer"}
                    onChange={() => {}}
                  />
                  <span
                    className={
                      selectedOption === "Direct Bank Transfer"
                        ? classes.withBlackDot
                        : classes.withWhiteDot
                    }
                  >
                    Direct Bank Transfer
                  </span>
                </label>

                <label onClick={() => setSelectedOption("Cash On Delivery")}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash On Delivery"
                    checked={selectedOption === "Cash On Delivery"}
                    onChange={() => {}}
                  />
                  <span
                    className={
                      selectedOption === "Cash On Delivery"
                        ? classes.withBlackDot
                        : classes.withWhiteDot
                    }
                  >
                    Cash On Delivery
                  </span>
                </label>
              </div>
              <p className={classes.transferParNorm}>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" target="_blank">
                  <strong>privacy policy</strong>
                </a>
                .
              </p>
              <div className={classes.btnContainer}>
                <button form="registerForm" className={classes.submitBtn}>
                  Place order
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
