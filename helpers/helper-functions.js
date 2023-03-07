const crypto = require("crypto");

// This function is to use the basic information of the candidate.
exports.UseInitialData = (candidateInfo) => {
    let candidate;
    if (candidateInfo) {
      if (candidateInfo.partitionKey) {
        candidate = candidateInfo.partitionKey;
      } else {
        const data = JSON.stringify(candidateInfo);
        candidate = crypto.createHash("sha3-512").update(data).digest("hex");
      }
    }
    return candidate;
  };
  
  // This function either converts a candidate to a string or creates a new candidate from the initial value.
  exports.GenerateStringCandidate = (candidateInfo) => {
    let candidate;
    const DEFAULT_CANDIDATE = "0";
  
    if (candidateInfo) {
      if (typeof candidateInfo !== "string") {
        candidate = JSON.stringify(candidateInfo);
      }
    } else {
      candidate = DEFAULT_CANDIDATE;
    }
    return candidate;
  };
  
  // This function checks only once if the length of the candidate string is greater than the limit.
  // In this case, it creates this string once again.
  exports.CheckCandidateLength = (candidate) => {
    const CANDIDATE_MAX_LENGTH = 256;
  
    if (candidate.length > CANDIDATE_MAX_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
    return candidate;
  };