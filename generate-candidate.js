const crypto = require("crypto");
const {
  GenerateStringCandidate,
  UseInitialData,
  CheckCandidateLength,
} = require("./helpers/helper-functions");


// This is the main function of creating candidates.
exports.GenerateCandidate = (candidateInfo) => {
  let candidate;

  if (candidateInfo) {
    candidate = UseInitialData(candidateInfo);
  }
  candidate = GenerateStringCandidate(candidate);
  candidate = CheckCandidateLength(candidate);

  return candidate;
};
