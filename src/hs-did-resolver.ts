import { DIDResolutionResult } from './resolver';
import axios from 'axios';

// interface DIDResolutionResult {
//     didResolutionMetadata: object;
//     didDocument: object;
//     didDocumentMetadata: object;
// }

export function getResolver() {

  async function resolve(
    did: string
  ): Promise<DIDResolutionResult> {

    const fetchUrl = `http://localhost:1317/hypersign-protocol/hidnode/ssi/did/${did}:`
    const response = await axios.get(fetchUrl)
    
    let didDoc = response.data.didDocument
    didDoc["@context"] = didDoc["context"]
    delete didDoc["context"]

    const metadata = response.data.didDocumentMetadata
    
    let resolutionMetadata = response.data.didResolutionMetadata

    // Return the DIDResolutionResult object
    return {
      didResolutionMetadata: resolutionMetadata,
      didDocument: didDoc,
      didDocumentMetadata: metadata,
    }
  }
  return { hs: resolve }
}

// export class hypersignMethod {    
//     private async resolve(
//         did: string
//       ): Promise<DIDDocument> {

//         const fetchUrl = `http://localhost:1317/hypersign-protocol/hidnode/ssi/did/${did}:`
//         const response = await axios.get(fetchUrl)
        
//         let didDoc = response.data.didDocument
//         didDoc["@context"] = didDoc["context"]
//         delete didDoc["context"]

//         const metadata = response.data.didDocumentMetadata
        
//         let resolutionMetadata = response.data.didResolutionMetadata
//         resolutionMetadata["contentType"] = "application/did+ld+json"

//         // Return the DIDResolutionResult object
//         return {
//           didResolutionMetadata: resolutionMetadata,
//           didDocument: didDoc,
//           didDocumentMetadata: metadata,
//         }
//       }

//     public getResolver() {
//         return { hsMethod: this.resolve }
//     }
// }
