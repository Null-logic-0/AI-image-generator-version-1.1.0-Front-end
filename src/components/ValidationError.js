function ValidationError() {
  if (!error) return null;
  return <p className="text-red-500 text-sm">{error}</p>;
}

export default ValidationError;
