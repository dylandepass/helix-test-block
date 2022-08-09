/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy'

const banner = `/*
 * Copyright ${new Date().getFullYear()} Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 * @preserve
 */`;

export default [
  {
    input: 'src/cards.js',
    output: {
      file: 'dist/cards.js',
      format: 'es',
      sourcemap: false,
      exports: 'auto'
    },
    plugins: [
      copy({
        targets: [
          { src: 'src/cards.stories.js', dest: 'dist/' }
        ]
      })
      /*terser()*/],
  },
  {
    input: 'src/cards.css',
    output: {
      file: 'cards.css'
    },
    plugins: [css({ output: 'dist/cards.css' })]
  }
];