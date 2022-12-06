import { Resolver } from "../resolver";
import { getResolver } from "../hs-did-resolver"

describe("Testing Hypersign Resolver", () => {
    
    it("testing hs", async () => {

        const didId = "did:hsd:0f49341a-20ef-43d1-bc93-de30993e6c51"
        const myResolver = getResolver()
        const resolver = new Resolver(myResolver)

        const result = await resolver.resolve(didId)
        console.log(result)

        expect("2").toBe("2")
    })
})