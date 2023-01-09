/* istanbul ignore file */

export default async function handler(req, res) {
  console.log('Retrieve server-side coverage data')

  const coverageData = global.__coverage__

  res.status(200).json({ coverage: coverageData })
}
