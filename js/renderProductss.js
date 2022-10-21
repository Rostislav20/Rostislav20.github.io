const Cocoloco = document.querySelector('#Cocoloco');
const CocoDjango = document.querySelector('#CocoDjango');
const MonsterHook = document.querySelector('#MonsterHook');
const TAJ = document.querySelector('#TAJ');
const Panda = document.querySelector('#Panda');
const TruePasion = document.querySelector('#TruePasion');
const YahyaL = document.querySelector('#YahyaL');
const YahyaE = document.querySelector('#YahyaE');
const Khmara = document.querySelector('#Khmara');
const OrehHookah = document.querySelector('#OrehHookah');
const MrCoco = document.querySelector('#MrCoco');
// Запускаем getProducts
getProductss();

// Асинхронная функция получения данных из файла products.json
async function getProductss() {
	// Получаем данные из products.json
    const responsee = await fetch('./js/productss.json');
    // Парсим данные из JSON формата в JS
    const productsArrayy = await responsee.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProductss(productsArrayy);
}

function renderProductss(productsArrayy) {
    productsArrayy.forEach(function (item) {
		
		if (item.name == "Coco Django") {
			const klh = item.descr;

        const productHTML = `<div class="${item.name}">
						
						<div class="card" data-id="${item.id}">
						<div class="postavshik">${item.postavshik}</div>
							<img class="product-img" src="img/Coal/CocoDjango/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<button class="items__control" data-action="minus">-</button>
										<div class="items__current" data-counter>1</div>
										<button class="items__control" data-action="plus">+</button>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.weight}кг.</div>
										<div class="price__currency">${item.price}</div>
										<div class="price__grn">грн</div>
									</div>
								</div>
								
								<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>
								<div class="infocard infocard_active">
								<div class="ingh">${item.descr}</div>
								<button type="button" class="btnback">
									Назад
								</button>
								
						</div>
							</div>
						</div>
						
						
					</div>`;
					CocoDjango.insertAdjacentHTML('beforeend', productHTML);
		}
		if (item.name == "Cocoloco") {
			const productHTML = `<div class="${item.name}">
				
							<div class="card" data-id="${item.id}">
							<div class="postavshik">${item.postavshik}</div>
								<img class="product-img" src="img/Coal/Cocoloco/${item.imgSrc}" alt="">
								<div class="card-body text-center">
									<h4 class="item-title">${item.title}</h4>
									<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
	
									<div class="details-wrapper">
	
										<!-- Счетчик -->
										<div class="items counter-wrapper">
											<button class="items__control" data-action="minus">-</button>
											<div class="items__current" data-counter>1</div>
											<button class="items__control" data-action="plus">+</button>
										</div>
										<!-- // Счетчик -->
	
										<div class="price">
											<div class="price__weight">${item.weight}кг.</div>
											<div class="price__currency">${item.price}</div>
											<div class="price__grn">грн</div>
										</div>
									</div>
									
									<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
										+ в корзину
									</button>
									<div class="infocard infocard_active">
								<div class="ingh">${item.descr}</div>
								<button type="button" class="btnback">
									Назад
								</button>
								
						</div>
								</div>
							</div>
						</div>`;
						Cocoloco.insertAdjacentHTML('beforeend', productHTML);
			}
			if (item.name == "Yahya Asseel") {
				const productHTML = `<div class="${item.name}">
					
								<div class="card" data-id="${item.id}">
								<div class="postavshik">${item.postavshik}</div>
									<img class="product-img" src="img/Coal/Yahya Asseel${item.imgSrc}" alt="">
									<div class="card-body text-center">
										<h4 class="item-title">${item.title}</h4>
										<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
		
										<div class="details-wrapper">
		
											<!-- Счетчик -->
											<div class="items counter-wrapper">
												<button class="items__control" data-action="minus">-</button>
												<div class="items__current" data-counter>1</div>
												<button class="items__control" data-action="plus">+</button>
											</div>
											<!-- // Счетчик -->
		
											<div class="price">
												<div class="price__weight">${item.weight}кг.</div>
												<div class="price__currency">${item.price}</div>
												<div class="price__grn">грн</div>
											</div>
										</div>
										
										<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
											+ в корзину
										</button>
										<div class="infocard infocard_active">
									<div class="ingh">${item.descr}</div>
									<button type="button" class="btnback">
										Назад
									</button>
									
							</div>
									</div>
								</div>
							</div>`;
							YahyaL.insertAdjacentHTML('beforeend', productHTML);
				}
				if (item.name == "Yahya Elegance") {
					const productHTML = `<div class="${item.name}">
						
									<div class="card" data-id="${item.id}">
									<div class="postavshik">${item.postavshik}</div>
										<img class="product-img" src="img/Coal/Yahya Elegance/${item.imgSrc}" alt="">
										<div class="card-body text-center">
											<h4 class="item-title">${item.title}</h4>
											<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
			
											<div class="details-wrapper">
			
												<!-- Счетчик -->
												<div class="items counter-wrapper">
													<button class="items__control" data-action="minus">-</button>
													<div class="items__current" data-counter>1</div>
													<button class="items__control" data-action="plus">+</button>
												</div>
												<!-- // Счетчик -->
			
												<div class="price">
													<div class="price__weight">${item.weight}кг.</div>
													<div class="price__currency">${item.price}</div>
													<div class="price__grn">грн</div>
												</div>
											</div>
											
											<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
												+ в корзину
											</button>
											<div class="infocard infocard_active">
										<div class="ingh">${item.descr}</div>
										<button type="button" class="btnback">
											Назад
										</button>
										
								</div>
										</div>
									</div>
								</div>`;
								YahyaE.insertAdjacentHTML('beforeend', productHTML);
					}
					if (item.name == "Khmara") {
						const productHTML = `<div class="${item.name}">
							
										<div class="card" data-id="${item.id}">
										<div class="postavshik">${item.postavshik}</div>
											<img class="product-img" src="img/Coal/Khmara/${item.imgSrc}" alt="">
											<div class="card-body text-center">
												<h4 class="item-title">${item.title}</h4>
												<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
				
												<div class="details-wrapper">
				
													<!-- Счетчик -->
													<div class="items counter-wrapper">
														<button class="items__control" data-action="minus">-</button>
														<div class="items__current" data-counter>1</div>
														<button class="items__control" data-action="plus">+</button>
													</div>
													<!-- // Счетчик -->
				
													<div class="price">
														<div class="price__weight">${item.weight}кг.</div>
														<div class="price__currency">${item.price}</div>
														<div class="price__grn">грн</div>
													</div>
												</div>
												
												<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
													+ в корзину
												</button>
												<div class="infocard infocard_active">
											<div class="ingh">${item.descr}</div>
											<button type="button" class="btnback">
												Назад
											</button>
											
									</div>
											</div>
										</div>
									</div>`;
									Khmara.insertAdjacentHTML('beforeend', productHTML);
						}
						if (item.name == "Panda") {
							const productHTML = `<div class="${item.name}">
								
											<div class="card" data-id="${item.id}">
											<div class="postavshik">${item.postavshik}</div>
												<img class="product-img" src="img/Coal/Panda/${item.imgSrc}" alt="">
												<div class="card-body text-center">
													<h4 class="item-title">${item.title}</h4>
													<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
					
													<div class="details-wrapper">
					
														<!-- Счетчик -->
														<div class="items counter-wrapper">
															<button class="items__control" data-action="minus">-</button>
															<div class="items__current" data-counter>1</div>
															<button class="items__control" data-action="plus">+</button>
														</div>
														<!-- // Счетчик -->
					
														<div class="price">
															<div class="price__weight">${item.weight}кг.</div>
															<div class="price__currency">${item.price}</div>
															<div class="price__grn">грн</div>
														</div>
													</div>
													
													<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
														+ в корзину
													</button>
													<div class="infocard infocard_active">
												<div class="ingh">${item.descr}</div>
												<button type="button" class="btnback">
													Назад
												</button>
												
										</div>
												</div>
											</div>
										</div>`;
										Panda.insertAdjacentHTML('beforeend', productHTML);
							}
							if (item.name == "Monster Hookah") {
								const productHTML = `<div class="${item.name}">
									
												<div class="card" data-id="${item.id}">
												<div class="postavshik">${item.postavshik}</div>
													<img class="product-img" src="img/Coal/Monster Hookah/${item.imgSrc}" alt="">
													<div class="card-body text-center">
														<h4 class="item-title">${item.title}</h4>
														<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
						
														<div class="details-wrapper">
						
															<!-- Счетчик -->
															<div class="items counter-wrapper">
																<button class="items__control" data-action="minus">-</button>
																<div class="items__current" data-counter>1</div>
																<button class="items__control" data-action="plus">+</button>
															</div>
															<!-- // Счетчик -->
						
															<div class="price">
																<div class="price__weight">${item.weight}кг.</div>
																<div class="price__currency">${item.price}</div>
																<div class="price__grn">грн</div>
															</div>
														</div>
														
														<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
															+ в корзину
														</button>
														<div class="infocard infocard_active">
													<div class="ingh">${item.descr}</div>
													<button type="button" class="btnback">
														Назад
													</button>
													
											</div>
													</div>
												</div>
											</div>`;
											MonsterHook.insertAdjacentHTML('beforeend', productHTML);
								}
								if (item.name == "True Passion") {
									const productHTML = `<div class="${item.name}">
										
													<div class="card" data-id="${item.id}">
													<div class="postavshik">${item.postavshik}</div>
														<img class="product-img" src="img/Coal/True Passion/${item.imgSrc}" alt="">
														<div class="card-body text-center">
															<h4 class="item-title">${item.title}</h4>
															<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
							
															<div class="details-wrapper">
							
																<!-- Счетчик -->
																<div class="items counter-wrapper">
																	<button class="items__control" data-action="minus">-</button>
																	<div class="items__current" data-counter>1</div>
																	<button class="items__control" data-action="plus">+</button>
																</div>
																<!-- // Счетчик -->
							
																<div class="price">
																	<div class="price__weight">${item.weight}кг.</div>
																	<div class="price__currency">${item.price}</div>
																	<div class="price__grn">грн</div>
																</div>
															</div>
															
															<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
																+ в корзину
															</button>
															<div class="infocard infocard_active">
														<div class="ingh">${item.descr}</div>
														<button type="button" class="btnback">
															Назад
														</button>
														
												</div>
														</div>
													</div>
												</div>`;
												TruePasion.insertAdjacentHTML('beforeend', productHTML);
									}
									if (item.name == "Hookah") {
										const productHTML = `<div class="${item.name}">
											
														<div class="card" data-id="${item.id}">
														<div class="postavshik">${item.postavshik}</div>
															<img class="product-img" src="img/Coal/OrehHookah/${item.imgSrc}" alt="">
															<div class="card-body text-center">
																<h4 class="item-title">${item.title}</h4>
																<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
								
																<div class="details-wrapper">
								
																	<!-- Счетчик -->
																	<div class="items counter-wrapper">
																		<button class="items__control" data-action="minus">-</button>
																		<div class="items__current" data-counter>1</div>
																		<button class="items__control" data-action="plus">+</button>
																	</div>
																	<!-- // Счетчик -->
								
																	<div class="price">
																		<div class="price__weight">${item.weight}кг.</div>
																		<div class="price__currency">${item.price}</div>
																		<div class="price__grn">грн</div>
																	</div>
																</div>
																
																<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
																	+ в корзину
																</button>
																<div class="infocard infocard_active">
															<div class="ingh">${item.descr}</div>
															<button type="button" class="btnback">
																Назад
															</button>
															
													</div>
															</div>
														</div>
													</div>`;
													OrehHookah.insertAdjacentHTML('beforeend', productHTML);
										}
										if (item.name == "TAJ") {
											const productHTML = `<div class="${item.name}">
												
															<div class="card" data-id="${item.id}">
															<div class="postavshik">${item.postavshik}</div>
																<img class="product-img" src="img/Coal/TAJ/${item.imgSrc}" alt="">
																<div class="card-body text-center">
																	<h4 class="item-title">${item.title}</h4>
																	<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
									
																	<div class="details-wrapper">
									
																		<!-- Счетчик -->
																		<div class="items counter-wrapper">
																			<button class="items__control" data-action="minus">-</button>
																			<div class="items__current" data-counter>1</div>
																			<button class="items__control" data-action="plus">+</button>
																		</div>
																		<!-- // Счетчик -->
									
																		<div class="price">
																			<div class="price__weight">${item.weight}кг.</div>
																			<div class="price__currency">${item.price}</div>
																			<div class="price__grn">грн</div>
																		</div>
																	</div>
																	
																	<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
																		+ в корзину
																	</button>
																	<div class="infocard infocard_active">
																<div class="ingh">${item.descr}</div>
																<button type="button" class="btnback">
																	Назад
																</button>
																
														</div>
																</div>
															</div>
														</div>`;
														TAJ.insertAdjacentHTML('beforeend', productHTML);
											}
							
			
    });

}