export async function GET() {
    return new Response("123")
}
export async function test() {
    return await new Promise((res) => {
        setTimeout(() => {
            console.log(123);
            res(123)
        }, 3000);
    })
};