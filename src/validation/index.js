

const isNotEmptyBed = ({ desc }) => desc && desc.length !== 0;


const isNotEmptyRoom = ({ title }) => title && title.length !== 0;


const isNotEmptyDoctor = ({ fullName, specialty, desc, age  }) => ((fullName && fullName.length !== 0 ) && ( specialty && specialty.length !== 0) && (desc && desc.length !== 0) && (age && +age > 24 && +age < 75));


const isNotEmptyPatient = ({ firstName, lastName, malady, age  }) => ((firstName && firstName.length !== 0 ) && ( lastName && lastName.length !== 0) && (malady && malady.length !== 0) && (age && +age > 0 && +age < 120));


export {
  isNotEmptyBed,
  isNotEmptyDoctor,
  isNotEmptyPatient,
  isNotEmptyRoom
  
};