import DbConnect, { collectionobj } from "@/lib/DbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, price, description, img } = body;

    if (!name || !price || !description || !img) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    const productCollection = await DbConnect(collectionobj.productCollection);
    const result = await productCollection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
    });
  }
}
