const Calaud = document.querySelector('#Calaud');
const chaski = document.querySelector('#chaski');
const moondshtuk = document.querySelector('#moondshtuk');
const derzatel = document.querySelector('#derzatel');
const Led = document.querySelector('#Led');
const folga = document.querySelector('#folga');
const basketforcoal = document.querySelector('#basketforcoal');
// Запускаем getProducts
getProductsss();

// Асинхронная функция получения данных из файла products.json
async function getProductsss() {
	// Получаем данные из products.json 
    const responseee = await fetch('./js/productsss.json');
    // Парсим данные из JSON формата в JS
    const productsArrayyy = await responseee.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProductsss(productsArrayyy);
}

function renderProductsss(productsArrayyy) {
    productsArrayyy.forEach(function (item) {
		
		if (item.name == "Калауд") {
			const klh = item.descr;

        const productHTML = `<div class="${item.name}">
						
						<div class="card" data-id="${item.id}">
						<div class="postavshik">${item.postavshik}</div>
							<img class="product-img" src="img/Staff/kalaud/${item.imgSrc}" alt="">
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
										<div class="price__weight">${item.weight}г.</div>
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
                    Calaud.insertAdjacentHTML('beforeend', productHTML);
		}
		if (item.name == "chaski") {
			const productHTML = `<div class="${item.name}">
				
							<div class="card" data-id="${item.id}">
							<div class="postavshik">${item.postavshik}</div>
								<img class="product-img" src="img/Staff/chaski/${item.imgSrc}" alt="">
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
											<div class="price__weight">${item.weight}г.</div>
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
                        chaski.insertAdjacentHTML('beforeend', productHTML);
			}
			if (item.name == "Алюминиевый мундштук") {
				const productHTML = `<div class="${item.name}">
								<div class="card" data-id="${item.id}">
								<div class="postavshik">${item.postavshik}</div>
									<img class="product-img" src="img/Staff/moondshtuk/${item.imgSrc}" alt="">
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
												<div class="price__weight">${item.weight}г.</div>
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
							moondshtuk.insertAdjacentHTML('beforeend', productHTML);
				}
				if (item.name == "Держатель") {
					const productHTML = `<div class="${item.name}">
									
									<div class="card" data-id="${item.id}">
									<div class="postavshik">${item.postavshik}</div>
										<img class="product-img" src="img/Staff/derzatel AMY Deluxe/${item.imgSrc}" alt="">
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
													<div class="price__weight">${item.weight}г.</div>
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
                                derzatel.insertAdjacentHTML('beforeend', productHTML);
					}
					if (item.name == "LED AMY Deluxe") {
						const productHTML = `<div class="${item.name}">
										
										<div class="card" data-id="${item.id}">
										<div class="postavshik">${item.postavshik}</div>
											<img class="product-img" src="img/Staff/LED AMY Deluxe/${item.imgSrc}" alt="">
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
														<div class="price__weight">${item.weight}г.</div>
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
                                    Led.insertAdjacentHTML('beforeend', productHTML);
						}
						if (item.name == "Фольга") {
							const productHTML = `<div class="${item.name}">
											
											<div class="card" data-id="${item.id}">
											<div class="postavshik">${item.postavshik}</div>
												<img class="product-img" src="img/Staff/folga/${item.imgSrc}" alt="">
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
															<div class="price__weight">${item.weight}г.</div>
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
                                        folga.insertAdjacentHTML('beforeend', productHTML);
							}
							if (item.name == "Корзина для углей") {
								const klh = item.descr;
					
							const productHTML = `<div class="${item.name}">
											
											<div class="card" data-id="${item.id}">
											<div class="postavshik">${item.postavshik}</div>
												<img class="product-img" src="img/Staff/basket for coal/${item.imgSrc}" alt="">
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
															<div class="price__weight">${item.weight}г.</div>
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
                                        basketforcoal.insertAdjacentHTML('beforeend', productHTML);
							}
    });

}
