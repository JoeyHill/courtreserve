module.exports.formInputs = [
    // General Information Tab
    {
      label: "First Name",
      selector: "#FirstName_MC",
      name: "FirstName",
      type: "text"
    },
    {
      label: "Last Name", 
      selector: "#LastName_MC",
      name: "LastName",
      type: "text"
    },
    {
      label: "Email",
      selector: "#Email",
      name: "Email", 
      type: "text"
    },
    {
      label: "Member Number",
      selector: "#MemberNumber",
      name: "MemberNumber",
      type: "text"
    },
    {
      label: "Phone Number",
      selector: "#PhoneNumber",
      name: "PhoneNumber",
      type: "text"
    },
    {
      label: "Gender",
      selector: "#Gender_Create",
      name: "Gender",
      type: "text"
    },
    {
      label: "Date of Birth",
      selector: "#DateOfBirth_Create",
      name: "DateOfBirth",
      type: "hidden"
    },
    {
      label: "Date of Birth (Month)",
      selector: "#DOBMonth47f883d78c3a466b9faba4c6f385d602",
      name: "DOBMonth47f883d78c3a466b9faba4c6f385d602",
      type: "text"
    },
    {
      label: "Date of Birth (Day)",
      selector: "#DOBDay47f883d78c3a466b9faba4c6f385d602", 
      name: "DOBDay47f883d78c3a466b9faba4c6f385d602",
      type: "text"
    },
    {
      label: "Date of Birth (Year)",
      selector: "#DOBYear47f883d78c3a466b9faba4c6f385d602",
      name: "DOBYear47f883d78c3a466b9faba4c6f385d602", 
      type: "text"
    },
    {
      label: "Note",
      selector: "#Note",
      name: "Note",
      type: "textarea"
    },
    
    // Rating Categories
    {
      label: "Tennis Rating",
      selector: "#573dff57-98fb-4c7f-9bc4-61da31e0f985RatingCategories0",
      name: "RatingCategories[0].SelectedRatingId",
      type: "text"
    },
    {
      label: "Pickleball Rating", 
      selector: "#573dff57-98fb-4c7f-9bc4-61da31e0f985RatingCategories1",
      name: "RatingCategories[1].SelectedRatingId",
      type: "text"
    },
    
    // Custom Fields
    {
      label: "PIN # (this is your unique code that will be utilized to enter the gates and the building)",
      selector: "#CustomFields_0__Value",
      name: "CustomFields[0].Value",
      type: "text"
    },
    {
      label: "Membership Renewal Date",
      selector: "#CustomFields_1__Value", 
      name: "CustomFields[1].Value",
      type: "text"
    },
    {
      label: "Silver and Fit ID",
      selector: "#CustomFields_2__Value",
      name: "CustomFields[2].Value", 
      type: "text"
    },
    
    // Family Options
    {
      label: "Create Family For This Member?",
      selector: "#CreateNewFamilyForThisMember",
      name: "CreateNewFamilyForThisMember",
      type: "checkbox"
    },
    {
      label: "Family Name",
      selector: "#FamilyName",
      name: "FamilyName",
      type: "text"
    },
    {
      label: "Family ID", 
      selector: "#FamilyUqNumber",
      name: "FamilyUqNumber",
      type: "text"
    },
    {
      label: "Set Membership On Family Level?",
      selector: "#SetMembershipOnFamilyLevel",
      name: "SetMembershipOnFamilyLevel",
      type: "checkbox"
    },
    {
      label: "Family Membership",
      selector: "#FamilyMembershipId",
      name: "FamilyMembershipId",
      type: "text"
    },
    {
      label: "Choose from existing family",
      selector: "#FamilyOrgId",
      name: "FamilyOrgId", 
      type: "text"
    },
    {
      label: "Family Role",
      selector: "#MemberType",
      name: "MemberType",
      type: "text"
    },
    {
      label: "Allow Child to Login",
      selector: "#AllowChildToLoginAndUseBookingPrivileges",
      name: "AllowChildToLoginAndUseBookingPrivileges",
      type: "checkbox"
    },
    {
      label: "Member Membership",
      selector: "#MembershipId",
      name: "MembershipId",
      type: "text"
    },
    {
      label: "Send Welcome Email to the User",
      selector: "#SendWelcomeEmail",
      name: "SendWelcomeEmail",
      type: "checkbox"
    },
    
    // Address Tab
    {
      label: "Address",
      selector: "#Address",
      name: "Address",
      type: "text"
    },
    {
      label: "City",
      selector: "#City",
      name: "City",
      type: "text"
    },
    {
      label: "State",
      selector: "#State", 
      name: "State",
      type: "text"
    },
    {
      label: "Zip Code",
      selector: "#ZipCode",
      name: "ZipCode",
      type: "text"
    },
    
    // Member Groups Tab
    {
      label: "Member Groups",
      selector: "#StaticMemberGroupIds",
      name: "StaticMemberGroupIds",
      type: "select"
    },
    
    // Payment Profile Tab
    {
      label: "Account Type",
      selector: "#CardOnFile_AccountType",
      name: "CardOnFile.AccountType",
      type: "text"
    },
    {
      label: "Card Number",
      selector: "#CardOnFile_CardNumber",
      name: "CardOnFile.CardNumber",
      type: "text"
    },
    {
      label: "Expiry Date",
      selector: "#CardOnFile_ExpiryDate",
      name: "CardOnFile.ExpiryDate",
      type: "text"
    },
    {
      label: "Security Code",
      selector: "#CardOnFile_Cvv",
      name: "CardOnFile.Cvv",
      type: "text"
    },
    {
      label: "Routing Number",
      selector: "#CardOnFile_RoutingNumber",
      name: "CardOnFile.RoutingNumber",
      type: "text"
    },
    {
      label: "Account Number",
      selector: "#CardOnFile_AccountNumber",
      name: "CardOnFile.AccountNumber",
      type: "text"
    },
    {
      label: "Street Address",
      selector: "#CardOnFile_Address1",
      name: "CardOnFile.Address1",
      type: "text"
    },
    {
      label: "Street Address 2",
      selector: "#CardOnFile_Address2",
      name: "CardOnFile.Address2",
      type: "text"
    },
    {
      label: "City",
      selector: "#CardOnFile_City",
      name: "CardOnFile.City",
      type: "text"
    },
    {
      label: "State",
      selector: "#CardOnFile_State",
      name: "CardOnFile.State",
      type: "text"
    },
    {
      label: "Zip Code",
      selector: "#CardOnFile_ZipCode",
      name: "CardOnFile.ZipCode",
      type: "text"
    }
  ];