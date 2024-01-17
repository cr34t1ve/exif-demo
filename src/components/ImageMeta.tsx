import * as ExifReader from "exifreader";

export function ImageMeta() {
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0];
    const tags = await ExifReader.load(file);
    console.log(tags);
  }

  return (
    <input
      type="file"
      id="file"
      accept=".jpg, .png, .heif, .heic"
      onChange={handleChange}
    />
  );
}
